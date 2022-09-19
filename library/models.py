from django.db import models


# Create your models here.

## 사용자
class User(models.Model):
    user_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.user_name

## 책 유형을 담는 테이블
class BookType(models.Model):
    book_type = models.CharField(max_length=200)

    def __str__(self):
        return self.book_type

## 책 정보를 담는 테이블
class Book(models.Model):
    book_name = models.CharField(max_length=200)
    bookType = models.ForeignKey(BookType, on_delete=models.SET_NULL, null=True)
    book_writer = models.CharField(max_length=200)
    count = models.IntegerField(default=0)
    
    def __str__(self):
        return self.book_name

## 도서관에 책을 입고 및 출고에 관한 정보를 담는 테이블
class History(models.Model):
    user_name = models.CharField(max_length=200)
    in_date = models.DateTimeField('date published')
    out_date = models.DateTimeField('date published')
    book_name = models.CharField(max_length=200)
    book_type = models.CharField(max_length=200)
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.user_name

## 사용자들이 빌리거나 반납에 관한 정보를 담는 테이블
class Library(models.Model):
    in_date = models.DateTimeField('date published')
    out_date = models.DateTimeField('date published')
    user_name = models.CharField(max_length=200)
    book_name = models.CharField(max_length=200)
    book_type = models.CharField(max_length=200)

    def __str__(self):
        return self.user_name