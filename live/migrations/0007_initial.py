# Generated by Django 4.1.2 on 2022-10-27 05:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('live', '0006_delete_blacklist_delete_chattingblacklist_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlackList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=200)),
                ('ip_address', models.TextField()),
                ('tf', models.CharField(choices=[('T', '블랙'), ('F', '블랙해지')], max_length=1)),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ChattingDataBlackList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chatting', models.TextField()),
            ],
        ),
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
        migrations.CreateModel(
            name='Live',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('chatting', models.CharField(choices=[('T', 'T'), ('F', 'F')], max_length=2)),
                ('back', models.CharField(choices=[('T', 'T'), ('F', 'F')], max_length=2)),
                ('sub_name', models.CharField(choices=[('T', 'T'), ('F', 'F')], max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='ChattingData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('chatting_data', models.TextField()),
                ('time', models.DateTimeField(default='2022-10-27 05:54:45')),
                ('live', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='live.live')),
            ],
        ),
    ]
