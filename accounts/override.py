from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication


class CanView(permissions.BasePermission):

    def has_permission(self, request, view):
        return bool(request.user )

    def has_object_permission(self, request, view, obj):
        try:
            if request.user == obj or request.user.is_admin or request.user.is_staff:
                return True
            return False
        except:
            return False


class OwnView(permissions.BasePermission):
    """
        Only use if trying to compare the request user and the object from different table
    """
    def has_permission(self, request, view):
        return bool(request.user)

    def has_object_permission(self, request, view, obj):
        try:
            if request.user == obj.user:
                return True
            return False
        except:
            return False


class IsAdmin(permissions.BasePermission):

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff and request.user.is_admin)

    def has_object_permission(self, request, view, obj):
        if request.user.is_admin and request.user.is_staff and request.user.is_active:
            return True
        return False



class IsOwnUser(permissions.BasePermission):
    """
    Allows access only to own users.
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user




class CanUpdateView(permissions.BasePermission):

    def has_permission(self, request, view):
        return bool(request.user )

    def has_object_permission(self, request, view, obj):
        try:
            if request.user.email == obj.email or request.user.is_admin or request.user.is_staff:
                return True
            return False
        except:
            return False