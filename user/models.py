from django.db import models


# Create your models here.

class User(models.Model):
    TrueFalse=(
        ('T','T'),
        ('F','F')
    )
    name = models.CharField(max_length=200)
    sub_name = models.CharField(max_length=200)
    user_id = models.CharField(max_length=200)
    pw = models.CharField(max_length=200)
    phon = models.CharField(max_length=14)
    email = models.CharField(max_length=200)
    sub_name_tf = models.CharField(max_length=2,choices=TrueFalse,default='T')

    def __str__(self):
        return self.user_id