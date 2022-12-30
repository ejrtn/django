
from django.db import models
from django.utils import timezone
from video.models import VideoCategory

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

# 채팅 입력 불가능 리스트
class ChattingDataBlackList(models.Model):
    user_id = models.CharField(max_length=200)
    chatting = models.TextField()
    
    def __str__(self):
        return self.chatting


class Live(models.Model):
    TrueFalse=(
        ('T','T'),
        ('F','F')
    )
    title = models.CharField(max_length=255,default='')                        # 방송 제목
    user_id = models.CharField(max_length=200)                      # 방송중인 유저
    chatting = models.CharField(max_length=2,choices=TrueFalse)     # 채팅 가능 여부
    back = models.CharField(max_length=2,choices=TrueFalse)         # 뒤로가기 가능 여부
    videoCategory = models.ForeignKey(VideoCategory, on_delete=models.PROTECT)      # 카테고리
    src = models.TextField(default='')                                                        # 영상 주소

    def __str__(self):
        return self.title

class ChattingData(models.Model):
    live = models.ForeignKey(Live, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    chatting_data = models.TextField()
    time = models.DateTimeField(default=timezone.now().strftime('%Y-%m-%d %H:%M:%S'))

    def __str__(self):
        return self.live