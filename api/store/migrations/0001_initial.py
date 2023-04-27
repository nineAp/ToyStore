# Generated by Django 4.0.4 on 2022-05-29 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Название картинки')),
                ('src', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Toy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Название игрушги')),
                ('description', models.TextField(verbose_name='Описание игрушки')),
                ('price', models.FloatField(verbose_name='Цена игрушки')),
                ('image', models.ManyToManyField(related_name='image', to='store.image', verbose_name='Картинка игрушгки')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Название категории')),
                ('toys', models.ManyToManyField(related_name='toys', to='store.toy', verbose_name='Игрушки')),
            ],
        ),
    ]
