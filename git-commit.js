const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getGitStatus() {
    return execSync('git status --porcelain').toString();
}

function analyzeChanges() {
    const status = getGitStatus();
    const changes = {
        html: [],
        scss: [],
        js: [],
        other: []
    };
    
    status.split('\n').forEach(line => {
        if (!line) return;
        
        const [status, filePath] = line.trim().split(/\s+/);
        const ext = path.extname(filePath).toLowerCase();
        
        switch(ext) {
            case '.html':
                changes.html.push(filePath);
                break;
            case '.scss':
                changes.scss.push(filePath);
                break;
            case '.js':
                changes.js.push(filePath);
                break;
            default:
                changes.other.push(filePath);
        }
    });
    
    return changes;
}

function generateCommitMessage() {
    const changes = analyzeChanges();
    let message = [];
    
    if (changes.html.length) {
        message.push(`HTML: Обновление ${changes.html.length} файлов`);
    }
    if (changes.scss.length) {
        message.push(`Стили: Изменения в ${changes.scss.length} файлах`);
    }
    if (changes.js.length) {
        message.push(`JavaScript: Модификация ${changes.js.length} файлов`);
    }
    if (changes.other.length) {
        message.push(`Прочее: Изменено ${changes.other.length} файлов`);
    }
    
    return message.join('. ');
}

function createCommit() {
    try {
        // Добавляем все изменения
        execSync('git add .');
        
        // Генерируем и применяем коммит
        const message = generateCommitMessage();
        execSync(`git commit -m "${message}"`);
        
        console.log('✅ Коммит успешно создан:', message);
    } catch (error) {
        console.error('❌ Ошибка при создании коммита:', error.message);
    }
}

createCommit();
