FROM node:20-alpine

WORKDIR /app

RUN npm install -g @angular/cli

# 暴露 Angular 預設埠號
EXPOSE 4200

# 啟動時自動安裝套件並啟動開發伺服器
CMD ["sh", "-c", "npm install && ng serve --host 0.0.0.0"]
