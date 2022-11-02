
from django.db import models
from django.utils import timezone

# Create your models here.

class BlackList(models.Model):
    TrueFalse=(
        ('T','블랙'),
        ('F','블랙해지')
    )
    user_id = models.CharField(max_length=200)
    ip_address = models.TextField()
    tf = models.CharField(max_length=1,choices=TrueFalse)
    note = models.TextField()

    def __str__(self):
        return self.user_id

class ChattingWarning(models.Model):
    Warning = (
        ('1m','1분'),
        ('1h','1시간'),
        ('6h','6시간'),
        ('12h','12시간'),
        ('24h','24시간')
    )
    count = models.IntegerField()
    warning = models.CharField(max_length=3,choices=Warning)
    user_id = models.CharField(max_length=200)
    note = models.TextField()
    
    def __str__(self):
        return self.user_id

class ChattingDataBlackList(models.Model):
    chatting = models.TextField()
    
    def __str__(self):
        return self.chatting


class Live(models.Model):
    TrueFalse=(
        ('T','T'),
        ('F','F')
    )
    name = models.CharField(max_length=200)
    chatting = models.CharField(max_length=2,choices=TrueFalse)
    back = models.CharField(max_length=2,choices=TrueFalse)

    def __str__(self):
        return self.name

class ChattingData(models.Model):
    live = models.ForeignKey(Live, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    chatting_data = models.TextField()
    time = models.DateTimeField(default=timezone.now().strftime('%Y-%m-%d %H:%M:%S'))

    def __str__(self):
        return self.live