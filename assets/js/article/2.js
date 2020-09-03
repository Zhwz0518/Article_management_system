$('tbody').on('click', '.btn-delete', function() {
    var id = $(this).attr('data-id')
        // 提示用户是否要删除
    layer.confirm('是否确定删除？', {
            btn: ['确认', '取消'],
            success: function() {
                console.log(this);
                this.enterEsc = function(event) {
                    if (event.keyCode === 13) {
                        $(".layui-layer-btn0").click();
                        return false; //阻止系统默认回车事件
                    } else if (event.keyCode == 27) {
                        $(".layui-layer-btn1").click();
                        return false;
                    }
                };
                $(document).on('keyup', this.enterEsc); //监听键盘事件，关闭层
            },
            end: function() {
                $(document).off('keyup', this.enterEsc); //解除键盘关闭事件
            }
        },
        function(index) {
            $.ajax({
                method: 'GET',
                url: '/my/article/deletecate/' + id,
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg('删除分类失败！')
                    }
                    layer.msg('删除分类成功！')
                    layer.close(index)
                    initArtCateList()
                }
            })
        });
})