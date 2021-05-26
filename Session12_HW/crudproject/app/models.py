from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()
    date = models.DateTimeField(null=True, blank=True)
    written_time = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', default=None)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments', default=None)

    def __str__(self):
        return self.content