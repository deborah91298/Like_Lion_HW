from django.contrib import admin
from .models import Comment, List

# Register your models here.
admin.site.register(List)
admin.site.register(Comment)