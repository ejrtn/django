# Generated by Django 4.1.2 on 2022-10-28 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0042_alter_video_cdate_alter_video_udate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='cdate',
            field=models.DateTimeField(default='2022-10-28 04:26:47'),
        ),
        migrations.AlterField(
            model_name='video',
            name='udate',
            field=models.DateTimeField(default='2022-10-28 04:26:47'),
        ),
    ]
