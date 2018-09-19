
var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    // name: ���� cookie �У����� session ���ֶ����ƣ�Ĭ��Ϊ connect.sid ��
    // store: session �Ĵ洢��ʽ��Ĭ�ϴ�����ڴ��У�Ҳ����ʹ�� redis��mongodb �ȡ�Express ��̬�ж�����Ӧģ���֧�֡�
    // secret: ͨ�����õ� secret �ַ����������� hash ֵ������ cookie �У�ʹ������ signedCookie ���۸ġ�
    // cookie: ���ô�� session id �� cookie �����ѡ�Ĭ��Ϊ(default: { path: '/', httpOnly: true, secure: false, maxAge: null })
    // genid: ����һ���µ� session_id ʱ����ʹ�õĺ����� Ĭ��ʹ�� uid2 ��� npm ����
    // rolling: ÿ��������������һ�� cookie��Ĭ��Ϊ false��
    // resave: ��ʹ session û�б��޸ģ�Ҳ���� session ֵ��Ĭ��Ϊ true��

    secret: 'shopping',
    cookie: { maxAge: 60000}
}));

app.use(function(req, res, next){
    var sess = req.session;
    if(sess.views){
        sess.views++
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + sess.views + '</p>');
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
        res.end();
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
});

//дһ���м����cookie��У��
// req.session.user = user ��·�����ж��Ƿ����
