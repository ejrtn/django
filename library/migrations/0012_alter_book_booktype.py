# Generated by Django 4.1 on 2022-09-14 08:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0011_booktype_history_library_book'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='bookType',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='typename', to='library.booktype'),
        ),
    ]