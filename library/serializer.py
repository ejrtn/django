from rest_framework import serializers
from .models import Book, BookType

class BookSerializers(serializers.ModelSerializer):
    class Meta:
        model = Book
        filds = ['book_name','book_writer','count']

class BookTypeSerializers(serializers.ModelSerializer):
    typename = BookSerializers(many=True, read_only=True)

    class Meta:
        model=BookType
        filds = ('id','type_name','typename')
        depth = 1
    def create(self, validated_data):
        typename_data = self.context['request'].FILES
        book = BookType.objects.create(**validated_data)
        for image_data in typename_data.getlist('typename'):
            Book.objects.create(blogId=book, image=image_data)
        return book