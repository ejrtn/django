# Generated by Django 4.1.3 on 2022-12-29 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0006_remove_user_sub_name_tf"),
    ]

    operations = [
        migrations.CreateModel(
            name="Star",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("user_id", models.CharField(max_length=200)),
                ("user_id_list", models.TextField()),
            ],
        ),
    ]
