# Generated by Django 4.1.2 on 2022-10-28 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('live', '0027_alter_chattingdata_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattingdata',
            name='time',
            field=models.DateTimeField(default='2022-10-28 04:16:18'),
        ),
    ]
