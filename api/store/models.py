from distutils.command.upload import upload
from turtle import title
from django.db import models


class Image(models.Model):
    title = models.CharField(verbose_name='Название картинки', max_length=100)
    src = models.ImageField(upload_to='toy_images/')


    def __str__(self):
        return self.title

class Toy(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название игрушги')
    description = models.TextField(verbose_name='Описание игрушки')
    price = models.FloatField(verbose_name='Цена игрушки')
    image = models.ManyToManyField(Image, verbose_name='Картинка игрушгки', related_name='image')

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название категории')
    toys = models.ManyToManyField(Toy, verbose_name='Игрушки', related_name='toys')

    def __str__(self):
        return self.title


class Feedback(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок отзыва')
    email = models.CharField(max_length=100, verbose_name='Почта пользователя')
    description = models.TextField(verbose_name='Текст Отзыва')

    def __str__(self):
        return self.title
