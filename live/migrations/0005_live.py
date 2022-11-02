# Generated by Django 4.1.2 on 2022-10-27 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('live', '0004_chattingwarning_remove_blacklist_warning'),
    ]

    operations = [
        migrations.CreateModel(
            name='Live',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('chatting', models.CharField(choices=[('T', 'T'), ('F', 'F')], max_length=2)),
                ('back', models.CharField(choices=[('T', 'T'), ('F', 'F')], max_length=2)),
            ],
        ),
    ]