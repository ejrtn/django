# Generated by Django 4.1 on 2022-09-15 01:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0012_alter_book_booktype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='bookType',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='library.booktype'),
        ),
    ]
