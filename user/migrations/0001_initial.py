# Generated by Django 4.1 on 2022-09-26 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('user_id', models.CharField(max_length=200)),
                ('pw', models.CharField(max_length=200)),
                ('phon', models.CharField(max_length=14)),
                ('email', models.CharField(max_length=200)),
            ],
        ),
    ]
