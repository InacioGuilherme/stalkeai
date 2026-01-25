import React from 'react';

const ConfirmModal = ({
  showConfirmModal,
  username,
  modalProfileData,
  onClose,
  onConfirm
}) => {
  if (!showConfirmModal || !modalProfileData) return null;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      const millions = num / 1000000;
      return millions.toFixed(1).replace('.', ',') + ' mi';
    } else if (num >= 100000) {
      return Math.floor(num / 1000) + ' mil';
    } else if (num >= 11000) {
      const thousands = num / 1000;
      return thousands.toFixed(1).replace('.', ',') + ' mil';
    }
    return num.toLocaleString('pt-BR');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Título */}
        <div className="modal-header">
          <h3 className="modal-title">Confirme o Instagram</h3>
          <p className="modal-subtitle">
            Você deseja espionar o perfil <span className="highlight-username">@{username}</span>?
          </p>
        </div>

        {/* Layout Instagram: Foto + Stats em linha */}
        <div className="profile-preview">
          {/* Foto à esquerda */}
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img 
                src={modalProfileData.profileImageUrl} 
                alt="Foto de perfil" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-image-fallback">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats à direita */}
          <div className="profile-stats-horizontal">
            <div className="stat-item">
              <p className="stat-number">{formatNumber(modalProfileData.postCount)}</p>
              <p className="stat-label">posts</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">{formatNumber(modalProfileData.followersCount)}</p>
              <p className="stat-label">seguidores</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">{formatNumber(modalProfileData.followingCount)}</p>
              <p className="stat-label">seguindo</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        {modalProfileData.bio && (
          <div className="profile-bio">
            <p>{modalProfileData.bio.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < modalProfileData.bio.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}</p>
          </div>
        )}

        {/* Aviso de Limite */}
        <div className="modal-warning">
          <div className="warning-content">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>
              <strong>Aviso:</strong> Limite de apenas 1 pesquisa por dispositivo, certifique-se que digitou o usuário corretamente.
            </span>
          </div>
        </div>

        {/* Botões */}
        <div className="modal-buttons">
          <button 
            className="cancel-btn"
            onClick={onClose}
          >
            Corrigir @
          </button>
          <button     
            className="confirm-btn"
            onClick={onConfirm}
          >
            Confirmar
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;