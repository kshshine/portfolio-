//�˾�
function layer_open(el){
var temp = $('#' + el);
var bg = temp.prev().hasClass('bg03');    //dimmed ���̾ �����ϱ� ���� boolean ����
if(bg){
$('.layer03').fadeIn();   //'bg' Ŭ������ �����ϸ� ���̾ ��Ÿ���� ����� dimmed �ȴ�. 
}else{
temp.fadeIn();
}

// ȭ���� �߾ӿ� ���̾ ����.
if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
else temp.css('top', '0px');
if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
else temp.css('left', '0px');

temp.find('a.cbtn').click(function(e){
if(bg){
$('.layer03').fadeOut(); //'bg' Ŭ������ �����ϸ� ���̾ ������� �Ѵ�. 
}else{
temp.fadeOut();
}
e.preventDefault();
});
$('.layer03 .bg03').click(function(e){  //����� Ŭ���ϸ� ���̾ ������� �ϴ� �̺�Ʈ �ڵ鷯
$('.layer03').fadeOut();
e.preventDefault();
});
} 