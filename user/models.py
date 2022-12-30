from django.db import models


# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=200)
    sub_name = models.CharField(max_length=200)
    user_id = models.CharField(max_length=200)
    pw = models.CharField(max_length=200)
    phon = models.CharField(max_length=14)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.user_id


# 즐겨찾기
class Star(models.Model):
    user_id = models.CharField(max_length=200)
    user_id_list = models.TextField()

    def __str__(self) -> str:
        return self.user_id