# Generated by Django 4.1.2 on 2022-10-27 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('live', '0003_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChattingWarning',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField()),
                ('warning', models.CharField(choices=[('1m', '1분'), ('1h', '1시간'), ('6h', '6시간'), ('12h', '12시간'), ('24h', '24시간')], max_length=3)),
                ('user_id', models.CharField(max_length=200)),
                ('note', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='blacklist',
            name='warning',
        ),
    ]
