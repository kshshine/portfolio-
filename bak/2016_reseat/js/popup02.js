//�˾�
function layer_open(el){
var temp = $('#' + el);
var bg = temp.prev().hasClass('bg');    //dimmed ���̾ �����ϱ� ���� boolean ����
if(bg){
$('.layer02').fadeIn();   //'bg' Ŭ������ �����ϸ� ���̾ ��Ÿ���� ����� dimmed �ȴ�. 
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
$('.layer02').fadeOut(); //'bg' Ŭ������ �����ϸ� ���̾ ������� �Ѵ�. 
}else{
temp.fadeOut();
}
e.preventDefault();
});
$('.layer02 .bg').click(function(e){  //����� Ŭ���ϸ� ���̾ ������� �ϴ� �̺�Ʈ �ڵ鷯
$('.layer02').fadeOut();
e.preventDefault();
});
} 