# Generated by Django 4.1.3 on 2022-12-29 04:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("video", "0014_alter_video_cdate_alter_video_udate"),
    ]

    operations = [
        migrations.AlterField(
            model_name="video",
            name="cdate",
            field=models.DateTimeField(default="2022-12-29 04:53:16"),
        ),
        migrations.AlterField(
            model_name="video",
            name="udate",
            field=models.DateTimeField(default="2022-12-29 04:53:16"),
        ),
    ]
