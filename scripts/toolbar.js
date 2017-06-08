        var board = false;
        function bgboard() {
            if (board) {
                $.fn.whiteboard.changeBackground("white");
                board = false;
            }
            else {
                $.fn.whiteboard.changeBackground("#2f6f25");
                board = true;
            }
        }

        function colors(stift) {
            if ($('.colors').first().text() == stift) {
                $('.colors').text('');
                $('.colors').hide();
            }
            else {
                $('.colors').show();
                $('.colors').text(stift);
            }
        }


        $(function(){
            $(".colors").on("click", function() {
                var colorData = $(this).data("color");

                if ($(this).text() == "brush") {
                    $.fn.whiteboard.setBrushImage(colorData);
                }
                else {
                    $.fn.whiteboard.setColor(colorData);
                }
            });
        });