# Generated by Django 4.0.4 on 2022-06-05 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_feedback'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='email',
            field=models.CharField(default=0, max_length=100, verbose_name='Почта пользователя'),
            preserve_default=False,
        ),
    ]
