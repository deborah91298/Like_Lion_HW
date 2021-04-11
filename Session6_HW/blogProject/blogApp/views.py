from django.shortcuts import render, redirect
from .models import Article

# Create your views here.
def index(request):
    # 1. 카테고리가 movie 인 게시글을 갖고온다 -> filter
    # 2. 그 게시글들 갯수를 센다 -> count
    movie_number = Article.objects.filter(category="movie").count()
    drama_number = Article.objects.filter(category="drama").count()
    programming_number = Article.objects.filter(category="programming").count()
    # render 함수의 세번째 인자 -> html 에서 쓸수있도록 변수를 넘겨주는 역할
    return render(request, 'index.html', {'a': movie_number, 'b': drama_number, 'c': programming_number})

def detail(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    return render(request, 'detail.html', {'article': article})

def new(request):
    if request.method == 'POST':
    #POST 요청일 경우
        print(request.POST) #data확인
        new_article = Article.objects.create(
            title = request.POST['title'],
            content = request.POST['content'],
            category = request.POST['category'],
            # time = time.ctime(time.time())
        )
        return redirect('detail', article_pk=new_article.pk)
    
    #POST 요청이 아닐 경우
    return render(request, 'new.html')

def movie(request):
    movies = Article.objects.filter(category="movie")
    return render(request, 'movie.html', {'articles': movies})

def drama(request):
    dramas = Article.objects.filter(category="drama")
    return render(request, 'movie.html', {'articles': dramas})

def programming(request):
    programmings = Article.objects.filter(category="programming")
    return render(request, 'programming.html', {'articles': programmings})
    