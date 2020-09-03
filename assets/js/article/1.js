 // 删除功能
 $('body').on('click', '.btn-del', function (e) {
    var id = $(this).attr('data-id')
    console.log(id)
    layer.confirm('确认删除?', {
        icon: 3,
        title: '提示',

        //按钮
        success: function (layero, index) {
            this.enterEsc = function (event) {
                if (event.keyCode === 13) {
                    //确认执行代码段
                    $.ajax({
                        method: 'GET',
                        url: '/my/article/deletecate/' + id,
                        success: function (res) {
                            if (res.status !== 0) return layer.msg('删除失败!')
                            layer.msg('删除成功!')
                            layer.close(index);
                            initArtCateList()
                        }
                    })
                    layer.close(index);
                    return false;
                    //阻止系统默认回车事件
                }
            };
            $(document).on('keydown', this.enterEsc);//监听键盘事件，关闭层
        },
        end: function () {
            $(document).off('keydown', this.enterEsc);//解除键盘关闭事件
        },
        yes: function () {//确认执行代码段

        },
        no: function () {

        }
    });

})
