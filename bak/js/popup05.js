//�˾�
function layer_open(a){
var temp = $('#' + a);
var bg = temp.prev().hasClass('bg05');    //dimmed ���̾ �����ϱ� ���� boolean ����
if(bg){
$('.layer05').fadeIn();   //'bg' Ŭ������ �����ϸ� ���̾ ��Ÿ���� ����� dimmed �ȴ�. 
}else{
temp.fadeIn();
}

// ȭ���� �߾ӿ� ���̾ ����.
if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
else temp.css('top', '0px');
if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
else temp.css('left', '0px');

temp.find('a.cbtn05').click(function(e){
if(bg){
$('.layer05').fadeOut(); //'bg' Ŭ������ �����ϸ� ���̾ ������� �Ѵ�. 
}else{
temp.fadeOut();
}
e.preventDefault();
});
$('.layer05 .bg05').click(function(e){  //����� Ŭ���ϸ� ���̾ ������� �ϴ� �̺�Ʈ �ڵ鷯
$('.layer05').fadeOut();
e.preventDefault();
});
} 
