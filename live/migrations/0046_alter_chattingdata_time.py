# Generated by Django 4.1.3 on 2022-11-29 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("live", "0045_alter_chattingdata_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="chattingdata",
            name="time",
            field=models.DateTimeField(default="2022-11-29 02:11:36"),
        ),
    ]