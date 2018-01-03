PATH=$PWD/node_modules/.bin:$PATH

echo Building root
uncss -H . -s /node_modules/bootstrap/dist/css/bootstrap.css,/css/index.css index.html >> css/external.css
for DIR in $(find js/components/* -type d)
do
    [ -f $DIR/index.html ] || continue;
    echo Building $DIR
    uncss -H . -s /node_modules/bootstrap/dist/css/bootstrap.css,/css/index.css $DIR/index.html >> $DIR/external.css
done
babel -d js-old js
browserify js-old/index.js -o bundle.js
rm -rf js-old
