from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Accounts(models.Model):
    GENDER_TYPES = [
        ('MALE','male'),
        ('FEMALE', 'female'),
    ]
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    dob=models.DateField(null=True, blank=True)
    gender=models.CharField(max_length=100, choices=GENDER_TYPES, blank=True, null=True)
    country=models.CharField(max_length=100, blank=True, null=True)
    address=models.CharField(max_length=255, blank=True, null=True)
    profile_pic=models.ImageField(upload_to="profile", blank=True, null=True)


    def __str__(self):
        return self.email


@receiver(post_save, sender=User)
def create_user_account(sender, instance, created, **kwargs):
    if created:
        Accounts.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_account(sender, instance, **kwargs):
    instance.accounts.save()

    
