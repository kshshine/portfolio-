//�˾�
function layer_open(a){
var temp = $('#' + a);
var bg = temp.prev().hasClass('bg04');    //dimmed ���̾ �����ϱ� ���� boolean ����
if(bg){
$('.layer04').fadeIn();   //'bg' Ŭ������ �����ϸ� ���̾ ��Ÿ���� ����� dimmed �ȴ�. 
}else{
temp.fadeIn();
}

// ȭ���� �߾ӿ� ���̾ ����.
if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
else temp.css('top', '0px');
if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
else temp.css('left', '0px');

temp.find('a.cbtn04').click(function(e){
if(bg){
$('.layer04').fadeOut(); //'bg' Ŭ������ �����ϸ� ���̾ ������� �Ѵ�. 
}else{
temp.fadeOut();
}
e.preventDefault();
});
$('.layer04 .bg04').click(function(e){  //����� Ŭ���ϸ� ���̾ ������� �ϴ� �̺�Ʈ �ڵ鷯
$('.layer04').fadeOut();
e.preventDefault();
});
} 
