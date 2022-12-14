# Generated by Django 4.1 on 2022-09-26 08:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VideoCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('cdate', models.DateTimeField()),
                ('udate', models.DateTimeField()),
                ('user_id', models.CharField(max_length=200)),
                ('run_time', models.CharField(max_length=100)),
                ('url', models.TextField()),
                ('content', models.TextField()),
                ('Thumbnail', models.TextField()),
                ('run_count', models.IntegerField()),
                ('videoCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='video.videocategory')),
            ],
        ),
    ]
