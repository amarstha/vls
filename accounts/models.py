from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):

        if not email:
            raise ValueError("The email must be set")
        if not password:
            raise ValueError("The password must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, password=password, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)
        extra_fields.setdefault('is_verified', True)
        return self.create_user(email, password, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):

    """
    Models for users
    """

    GENDER_TYPE = (
        ('male', 'male'),
        ('female', 'female'),
        ('other', 'other')
    )

    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=55,null=True)
    phone = models.IntegerField(null=True,unique=True)
    image=models.ImageField(upload_to='profile-image',blank=True,null=True)
    gender=models.CharField(max_length=25,choices=GENDER_TYPE,default='other')
    dob=models.DateField(null=True,blank=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    address=models.CharField(max_length=255,blank=True,null=True)
    created_date = models.DateTimeField(auto_now_add=True,blank=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return self.email

    class Meta:
        ordering = ('-created_date', )