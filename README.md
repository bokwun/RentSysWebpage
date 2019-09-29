## 配置nginx服务器
```
server{
        #监听端口
        listen 80;
        index index.html;
        #刷新非根目录的页面出现404的解决方法
        location / {
    	  try_files $uri $uri/ /index.html last;
       	index index.html;
        }
        #资源定位
        location ~ .*\.(php|php5)?$
        {
          #fastcgi_pass unix:/tmp/php-cgi.sock;
          fastcgi_pass 127.0.0.1:9000;
          fastcgi_index index.php;
          include fastcgi.conf;
        }
        #图片缓存时间设置
        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|ico)$
        {
          expires 30d;
          #access_log off;
        }
        #JS和CSS缓存时间设置
        location ~ .*\.(js|css)?$
        {
          expires 15d;
          #access_log off;
        }
        #定义本虚拟主机的访问日志
        access_log off;
      }
server {
        listen 8088;

        location / {
		        proxy_pass  http://192.168.1.108:8081;
          	proxy_redirect  off;
            proxy_set_header   Host    $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        }
        access_log logs/go1231.a_access.log;
      }
```

## 部署

   静态文件打包后放在dist文件夹里，打包后的静态文件需要放在nginx下的html文件夹。
   
   启动nginx服务器
   
    start nginx

