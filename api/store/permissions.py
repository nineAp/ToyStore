from operator import truediv
from urllib import request
from rest_framework import permissions


class isAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)


class isPostOrGet(permissions.BasePermission):
    def has_permission(self, request, view):
        if(request.method in ('GET', 'HEAD', 'OPTIONS', 'POST')):
            return True
        return bool(request.user and request.user.is_staff)