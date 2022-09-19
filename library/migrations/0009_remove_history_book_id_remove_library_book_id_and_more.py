# Generated by Django 4.1 on 2022-09-14 04:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0008_rename_booktype_id_book_booktype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='book_id',
        ),
        migrations.RemoveField(
            model_name='library',
            name='book_id',
        ),
        migrations.AlterField(
            model_name='book',
            name='bookType',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='library.booktype'),
        ),
    ]