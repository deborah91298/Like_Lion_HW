from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    category = models.TextField()
    # time = models.TextField()
    time = models.DateTimeField(auto_now=True) # (auto_now=true): 지금 시간을 자동으로 받아오기!
    # DateTimeField()는 'create' 될 때 자동으로 시간 저장됨!

    def __str__(self):
        return self.title

# 글 1
# 제목 : 안녕하세요
# 내용 : 밥먹으실분
# 글 2
# 제목 : 안녕하세요111
# 내용 : 밥먹으실분
# 글 3
# 제목 : 안녕하세요2222
# 내용 : 밥먹으실분