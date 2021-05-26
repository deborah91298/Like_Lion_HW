from django.shortcuts import render, redirect
from .models import Post, Comment
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth.decorators import login_required
# Create your views here.


def home(request):
    posts = Post.objects.all().order_by('date')

    return render(request, 'home.html', {'posts': posts})


@login_required(login_url='/registration/login')
def new(request):
    if request.method == 'POST':
        new_post = Post.objects.create(
            title=request.POST['title'],
            content=request.POST['content'],
            date=request.POST['date'],
            author=request.user
        )
        return redirect('detail', new_post.pk)

    return render(request, 'new.html')


@login_required(login_url='/registration/login')
def detail(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    if request.method == 'POST':
        Comment.objects.create(
            post=post,
            content=request.POST['content'],
            author=request.user,
        )
        return redirect('detail', post_pk)

    return render(request, 'detail.html', {'post': post})


def edit(request, post_pk):
    post = Post.objects.get(pk=post_pk)

    if request.method == 'POST':
        Post.objects.filter(pk=post_pk).update(
            title=request.POST['title'],
            content=request.POST['content'],
            date=request.POST['date'],
        )
        return redirect('detail', post_pk)

    return render(request, 'edit.html', {'post': post})


def delete(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    post.delete()

    return redirect('home')


def delete_comment(request, post_pk, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    comment.delete()
    return redirect('detail', post_pk)


def signup(request):
    if request.method == "POST":
        found_user = User.objects.filter(username=request.POST['username'])
        if len(found_user) > 0:
            error = '이미 존재하는 아이디입니다'
            return render(request, 'registration/signup.html', {'error': error})
        new_user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password'],
            )
        auth.login(request, new_user, backend='django.contrib.auth.backends.ModelBackend')
        return redirect('home')

    return render(request, 'registration/signup.html')


def login(request):
    posts = Post.objects.all().order_by('date')
    if request.method == 'POST':
        found_user = auth.authenticate(
            username=request.POST['username'],
            password=request.POST['password']
        )
        if len(request.POST['username']) > 10:
            error = '아이디는 10자리 이하로 해주세요!'
            return render(request, 'registration/login.html', {'error': error})

        if found_user == None:
            error = '아이디 혹은 비밀번호가 틀렸습니다'
            return render(request, 'registration/login.html', {'error': error})
        else:
            auth.login(request, found_user)
            return render(request, 'home.html', {'posts':posts})

    return render(request, 'registration/login.html')


def logout(request):
    auth.logout(request)

    return redirect('home')

@login_required(login_url='/registration/login')
def mypage(request, user_pk):
    user = User.objects.get(pk=user_pk)
    posts = user.posts.all()
    comments = user.comments.all()
    return render(request, 'mypage.html', {'user': user, 'posts':posts, 'comments':comments})