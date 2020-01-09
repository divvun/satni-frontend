List tags by running:
```git tag -l```

After that, run the following commands. Replace the version number
by an increase of the largest number from the previous command.

* git tag -a v0.10.4
* git push origin master
* git push origin v0.10.4
* yarn build
* rsync -vaz  --delete --delete-excluded --info=progress2 build/* satni.org:/var/www/html/risten/
