# Generated by Django 4.1 on 2022-09-28 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_alter_video_videocategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='url_small',
            field=models.FileField(null=True, upload_to='videos/', verbose_name=''),
        ),
        migrations.AlterField(
            model_name='video',
            name='url',
            field=models.FileField(null=True, upload_to='videos/', verbose_name=''),
        ),
    ]
