# Generated by Django 4.1 on 2022-10-04 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0009_alter_video_cdate_alter_video_udate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='thumbnail',
        ),
        migrations.AlterField(
            model_name='video',
            name='cdate',
            field=models.DateTimeField(default='2022-10-04 08:29:28'),
        ),
        migrations.AlterField(
            model_name='video',
            name='udate',
            field=models.DateTimeField(default='2022-10-04 08:29:28'),
        ),
    ]