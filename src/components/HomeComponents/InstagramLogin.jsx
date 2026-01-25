import React, { useState, useEffect, useRef } from 'react';
import './InstagramLogin.css';

const InstagramLogin = ({ username, onLoginComplete }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('testing'); // testing, success
  const [showError, setShowError] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cryptoText, setCryptoText] = useState('Quebrando criptografia da conta...');
  const [cryptoSubtext, setCryptoSubtext] = useState('Testando combinações de senha...');
  const [progress, setProgress] = useState(0);
  const [attempts, setAttempts] = useState(0);
  
  const passwordsRef = useRef([]);
  const typingInterval = useRef(null);
  const cryptoInterval = useRef(null);
  const currentIndex = useRef(0);
  const isMounted = useRef(true);
  const typingSpeed = useRef(20);
  const attemptsCount = useRef(0);

  // Gerar senhas realistas (menos tentativas)
  useEffect(() => {
    const generatePasswords = () => {
      const bases = [
        "amor", "familia", "filho", "filha", "casa", "carro", 
        "viagem", "praia", "festa", "trabalho", "escola", 
        "faculdade", "namorado", "namorada", "casal"
      ];
      
      const specials = "!@#$%&*";
      const numbers = "0123456789";
      
      const passwords = [];
      
      // APENAS 3 tentativas erradas + 1 correta = 4 total
      for (let i = 0; i < 3; i++) {
        const base = bases[Math.floor(Math.random() * bases.length)];
        
        let password = base;
        
        // Adicionar números (menos números)
        const numCount = Math.floor(Math.random() * 2) + 2;
        for (let j = 0; j < numCount; j++) {
          password += numbers[Math.floor(Math.random() * numbers.length)];
        }
        
        // Adicionar caracteres especiais (10% de chance)
        if (Math.random() > 0.9) {
          password += specials[Math.floor(Math.random() * specials.length)];
        }
        
        passwords.push(password);
      }
      
      // Última senha é a que "funciona" (mais comum)
      const finalPasswords = [
        "minhavida123",
        "familia2024",
        "amoreterno",
        "senhasecreta"
      ];
      
      passwords.push(finalPasswords[Math.floor(Math.random() * finalPasswords.length)]);
      
      return passwords;
    };
    
    passwordsRef.current = generatePasswords();
  }, []);

  // Iniciar animação de criptografia
  useEffect(() => {
    const cryptoMessages = [
      "Quebrando criptografia da conta...",
      "Acessando servidores do Instagram...",
      "Buscando hash da senha...",
      "Testando combinações de senha...",
      "Criptografia quebrada com sucesso!"
    ];

    cryptoInterval.current = setInterval(() => {
      const randomMsg = cryptoMessages[Math.floor(Math.random() * 4)];
      const randomSub = ["Testando combinações...", "Analisando padrões...", "Processando algoritmos..."][Math.floor(Math.random() * 3)];
      
      if (isMounted.current && status === 'testing') {
        setCryptoText(randomMsg);
        setCryptoSubtext(randomSub);
      }
    }, 800);

    return () => {
      clearInterval(cryptoInterval.current);
    };
  }, [status]);

  // Efeito principal - Inicia a simulação
  useEffect(() => {
    isMounted.current = true;
    
    // Pequeno delay antes de iniciar
    const startTimer = setTimeout(() => {
      startHackingSimulation();
    }, 300);
    
    return () => {
      isMounted.current = false;
      if (typingInterval.current) clearInterval(typingInterval.current);
      if (cryptoInterval.current) clearInterval(cryptoInterval.current);
      clearTimeout(startTimer);
    };
  }, []);

  // Simular digitação
  const simulateTyping = (text, onComplete) => {
    if (!isMounted.current) return;
    
    let typed = '';
    let index = 0;
    
    clearInterval(typingInterval.current);
    setIsTyping(true);
    
    typingInterval.current = setInterval(() => {
      if (index < text.length && isMounted.current) {
        typed += text[index];
        setPassword('•'.repeat(typed.length));
        index++;
      } else {
        clearInterval(typingInterval.current);
        setIsTyping(false);
        setPassword('•'.repeat(text.length));
        if (onComplete) onComplete();
      }
    }, typingSpeed.current);
  };

  // Iniciar simulação de hacking
  const startHackingSimulation = async () => {
    if (!isMounted.current) return;
    
    const totalAttempts = passwordsRef.current.length;
    
    for (let i = 0; i < totalAttempts; i++) {
      if (!isMounted.current) return;
      
      currentIndex.current = i;
      const currentPass = passwordsRef.current[i];
      const isLastAttempt = i === totalAttempts - 1;
      
      // Atualizar progresso
      setAttempts(prev => prev + 1);
      attemptsCount.current++;
      setProgress(Math.min(100, ((i + 1) / totalAttempts) * 100));
      
      // Digitar senha
      await new Promise(resolve => {
        simulateTyping(currentPass, resolve);
      });
      
      // Aguardar entre tentativas
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Se for a última senha (sucesso)
      if (isLastAttempt) {
        // Senha encontrada!
        setStatus('success');
        setProgress(100);
        setCryptoText('Criptografia quebrada com sucesso!');
        setCryptoSubtext('Acesso liberado à conta!');
        
        // Limpar intervalo de criptografia
        clearInterval(cryptoInterval.current);
        
        // Mostrar senha completa
        await new Promise(resolve => setTimeout(resolve, 200));
        setShowPassword(true);
        setPassword(currentPass);
        
        // Habilitar botão
        await new Promise(resolve => setTimeout(resolve, 300));
        setShowSuccess(true);
        
        // Auto-redirecionar após 1 segundo
        setTimeout(() => {
          if (isMounted.current) {
            onLoginComplete();
          }
        }, 1000);
        
        break;
      } else {
        // Senha incorreta
        setShowError(true);
        
        await new Promise(resolve => setTimeout(resolve, 200));
        setShowError(false);
        
        // Limpar senha para próxima tentativa
        setPassword('');
        
        // Intervalo entre tentativas
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  };

  // Formatar display da senha
  const getPasswordDisplay = () => {
    if (status === 'success' && showPassword) {
      return password;
    }
    return password;
  };

  const handleLoginClick = () => {
    if (status === 'success') {
      onLoginComplete();
    }
  };

  return (
    <div className="instagram-login-screen">
      <div className="instagram-container">
        
        {/* Card Principal */}
        <div className="instagram-card">
          
          {/* Logo Instagram */}
          <div className="instagram-logo">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
              alt="Instagram"
              className="insta-logo-img"
            />
          </div>

          {/* Formulário */}
          <div className="instagram-form">
            
            {/* Username Input */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={username}
                  readOnly
                  className="form-input"
                  placeholder="Nome de usuário"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="password"
                  value={getPasswordDisplay()}
                  readOnly
                  className={`form-input password-input ${status === 'success' ? 'success' : ''}`}
                  placeholder="Senha"
                  style={{ 
                    fontFamily: 'monospace',
                    letterSpacing: '3px'
                  }}
                />
                {/* Botão Mostrar só aparece após sucesso */}
                {status === 'success' && (
                  <button 
                    type="button"
                    className="show-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                )}
              </div>
              
              {/* Error Message */}
              {showError && status === 'testing' && (
                <div className="error-message">
                  A senha que você inseriu está incorreta.
                </div>
              )}
            </div>

            {/* Quebrando Criptografia - ESTILO DO SITE ORIGINAL */}
            {status === 'testing' && (
              <div className="crypto-breaking">
                <div className="crypto-header">
                  <div className="crypto-icon">
                    <svg className="crypto-spinner" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="crypto-text">
                    <p className="crypto-main">{cryptoText}</p>
                    <p className="crypto-sub">{cryptoSubtext}</p>
                  </div>
                </div>
                
                {/* Barra de progresso */}
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                {/* Contador de tentativas */}
                <div className="attempts-counter">
                  <span className="attempts-text">
                    {attempts} combinação{attempts !== 1 ? 'es' : ''} testada{attempts !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            )}

            {/* Mensagem de Sucesso - ESTILO DO SITE ORIGINAL */}
            {showSuccess && (
              <div className="success-breaking">
                <div className="success-header">
                  <div className="success-icon">
                    <svg className="success-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="success-text">
                    <p className="success-main">Criptografia quebrada com sucesso!</p>
                    <p className="success-sub">Acesso liberado à conta!</p>
                  </div>
                </div>
              </div>
            )}

            {/* Login Button */}
            <button 
              type="button"
              className={`login-btn ${status === 'success' ? 'active' : ''}`}
              disabled={status !== 'success'}
              onClick={handleLoginClick}
            >
              {status === 'testing' ? 'Entrar' : 'Acessar Conta'}
            </button>

            {/* Separador OU */}
            <div className="separator">
              <div className="line"></div>
              <span className="or">OU</span>
              <div className="line"></div>
            </div>

            {/* Facebook Login */}
            <div className="facebook-login">
              <svg className="fb-icon" fill="#385185" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
              <span className="fb-text">Entrar com o Facebook</span>
            </div>

            {/* Esqueceu a senha */}
            <div className="forgot-password">
              <a href="#" className="forgot-link">Esqueceu a senha?</a>
            </div>

          </div>
        </div>

        {/* Card de cadastro */}
        <div className="signup-card">
          <p className="signup-text">
            Não tem uma conta? <a href="#" className="signup-link">Cadastre-se</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default InstagramLogin;