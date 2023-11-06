# Generated by Django 4.2.7 on 2023-11-06 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reg', '0002_user_avatar_alter_user_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='course',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='user',
            name='educational_program',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='faculty',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='level',
            field=models.CharField(default='Бакалавриат', max_length=30),
        ),
        migrations.AddField(
            model_name='user',
            name='work',
            field=models.CharField(default='', max_length=45),
        ),
    ]