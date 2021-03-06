# Generated by Django 2.0.5 on 2018-05-23 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercise', '0002_remove_exercise_uuid'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExerciseKey',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('key', models.CharField(blank=True, max_length=180, null=True)),
                ('type', models.IntegerField(choices=[(0, 'integer'), (1, 'text')])),
                ('description', models.TextField(blank=True, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
