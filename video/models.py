
from django.db import models
import os
from django.utils import timezone
from django.conf import settings
from PIL import Image

# Create your models here.

class VideoCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Video(models.Model):
    title = models.CharField(max_length=300)
    cdate = models.DateTimeField(default=timezone.now().strftime('%Y-%m-%d %H:%M:%S'))
    udate = models.DateTimeField(default=timezone.now().strftime('%Y-%m-%d %H:%M:%S'))
    videoCategory = models.ForeignKey(VideoCategory, on_delete=models.PROTECT)
    user_id = models.CharField(max_length=200)
    url = models.FileField(upload_to='video')
    url_small = models.FileField(upload_to='video_small')
    content = models.TextField()
    thumbnail = models.ImageField(upload_to='thumbnail')
    thumbnail_small = models.ImageField(upload_to='thumbnail_small')
    run_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
    def delete(self, *args, **kargs):
        if self.url:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.url.path))
        if self.url_small:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.url_small.path))
        if self.thumbnail:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.thumbnail.path))
        super(Video, self).delete(*args,**kargs)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.thumbnail_small)
        target_width = 300
        target_height = 169
        img = img.resize((int(target_width), int(target_height)), Image.ANTIALIAS)
        img.save(self.thumbnail_small.path, quality=100)
        img.close()
        self.thumbnail_small.close()