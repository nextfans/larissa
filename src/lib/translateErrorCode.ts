export function translateErrorCode(errorMessage: string) {
  console.error(errorMessage)
  const errors = {
    'Firebase: Error (auth/app-deleted).':
      'O banco de dados não foi localizado.',
    'Firebase: Error (auth/expired-action-code).':
      'O código da ação o ou link expirou.',
    'Firebase: Error (auth/invalid-action-code).':
      'O código da ação é inválido. Isso pode acontecer se o código estiver malformado ou já tiver sido usado.',
    'Firebase: Error (auth/user-disabled).':
      'O usuário correspondente à credencial fornecida foi desativado.',
    'Firebase: Error (auth/user-not-found).':
      'O usuário não corresponde à nenhuma credencial.',
    'Firebase: Error (auth/weak-password).': 'A senha é muito fraca.',
    'Firebase: Error (auth/email-already-in-use).':
      'Já existi uma conta com o endereço de email fornecido.',
    'Firebase: Error (auth/invalid-email).':
      'O endereço de e-mail não é válido.',
    'Firebase: Error (auth/operation-not-allowed).':
      'O tipo de conta correspondente à esta credencial, ainda não encontra-se ativada.',
    'Firebase: Error (auth/account-exists-with-different-credential).':
      'E-mail já associado a outra conta.',
    'Firebase: Error (auth/auth-domain-config-required).':
      'A configuração para autenticação não foi fornecida.',
    'Firebase: Error (auth/credential-already-in-use).':
      'Já existe uma conta para esta credencial.',
    'Firebase: Error (auth/operation-not-supported-in-this-environment).':
      'Esta operação não é suportada no ambiente que está sendo executada. Verifique se deve ser http ou https.',
    'Firebase: Error (auth/timeout).':
      'Excedido o tempo de resposta. O domínio pode não estar autorizado para realizar operações.',
    'Firebase: Error (auth/missing-android-pkg-name).':
      'Deve ser fornecido um nome de pacote para instalação do aplicativo Android.',
    'Firebase: Error (auth/missing-continue-uri).':
      'A próxima URL deve ser fornecida na solicitação.',
    'Firebase: Error (auth/missing-ios-bundle-id).':
      'Deve ser fornecido um nome de pacote para instalação do aplicativo iOS.',
    'Firebase: Error (auth/invalid-continue-uri).':
      'A próxima URL fornecida na solicitação é inválida.',
    'Firebase: Error (auth/unauthorized-continue-uri).':
      'O domínio da próxima URL não está na lista de autorizações.',
    'Firebase: Error (auth/invalid-dynamic-link-domain).':
      'O domínio de link dinâmico fornecido, não está autorizado ou configurado no projeto atual.',
    'Firebase: Error (auth/argument-error).':
      'Verifique a configuração de link para o aplicativo.',
    'Firebase: Error (auth/invalid-persistence-type).':
      'O tipo especificado para a persistência dos dados é inválido.',
    'Firebase: Error (auth/unsupported-persistence-type).':
      'O ambiente atual não suportar o tipo especificado para persistência dos dados.',
    'Firebase: Error (auth/invalid-credential).':
      'A credencial expirou ou está mal formada.',
    'Firebase: Error (auth/wrong-password).': 'Senha incorreta.',
    'Firebase: Error (auth/invalid-verification-code).':
      'O código de verificação da credencial não é válido.',
    'Firebase: Error (auth/invalid-verification-id).':
      'O ID de verificação da credencial não é válido.',
    'Firebase: Error (auth/custom-token-mismatch).':
      'O token está diferente do padrão solicitado.',
    'Firebase: Error (auth/invalid-custom-token).':
      'O token fornecido não é válido.',
    'Firebase: Error (auth/captcha-check-failed).':
      'O token de resposta do reCAPTCHA não é válido, expirou ou o domínio não é permitido.',
    'Firebase: Error (auth/invalid-phone-number).':
      'O número de telefone está em um formato inválido (padrão E.164).',
    'Firebase: Error (auth/missing-phone-number).':
      'O número de telefone é requerido.',
    'Firebase: Error (auth/quota-exceeded).': 'A cota de SMS foi excedida.',
    'Firebase: Error (auth/cancelled-popup-request).':
      'Somente uma solicitação de janela pop-up é permitida de uma só vez.',
    'Firebase: Error (auth/popup-blocked).':
      'A janela pop-up foi bloqueado pelo navegador.',
    'Firebase: Error (auth/popup-closed-by-user).':
      'A janela pop-up foi fechada pelo usuário sem concluir o login no provedor.',
    'Firebase: Error (auth/unauthorized-domain).':
      'O domínio do aplicativo não está autorizado para realizar operações.',
    'Firebase: Error (auth/invalid-user-token).':
      'O usuário atual não foi identificado.',
    'Firebase: Error (auth/user-token-expired).':
      'O token do usuário atual expirou.',
    'Firebase: Error (auth/null-user).': 'O usuário atual é nulo.',
    'Firebase: Error (auth/app-not-authorized).':
      'Aplicação não autorizada para autenticar com a chave informada.',
    'Firebase: Error (auth/invalid-api-key).':
      'A chave da API fornecida é inválida.',
    'Firebase: Error (auth/network-request-failed).':
      'Falha de conexão com a rede.',
    'Firebase: Error (auth/requires-recent-login).':
      'O último horário de acesso do usuário não atende ao limite de segurança.',
    'Firebase: Error (auth/too-many-requests).':
      'As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois que algum tempo.',
    'Firebase: Error (auth/web-storage-unsupported).':
      'O navegador não suporta armazenamento ou se o usuário desativou este recurso.',
    'Firebase: Error (auth/invalid-claims).':
      'Os atributos de cadastro personalizado são inválidos.',
    'Firebase: Error (auth/claims-too-large).':
      'O tamanho da requisição excede o tamanho máximo permitido de 1 Megabyte.',
    'Firebase: Error (auth/id-token-expired).': 'O token informado expirou.',
    'Firebase: Error (auth/id-token-revoked).':
      'O token informado perdeu a validade.',
    'Firebase: Error (auth/invalid-argument).':
      'Um argumento inválido foi fornecido a um método.',
    'Firebase: Error (auth/invalid-creation-time).':
      'O horário da criação precisa ser uma data UTC válida.',
    'Firebase: Error (auth/invalid-disabled-field).':
      'A propriedade para usuário desabilitado é inválida.',
    'Firebase: Error (auth/invalid-display-name).':
      'O nome do usuário é inválido.',
    'Firebase: Error (auth/invalid-email-verified).': 'O e-mail é inválido.',
    'Firebase: Error (auth/invalid-hash-algorithm).':
      'O algoritmo de HASH não é uma criptografia compatível.',
    'Firebase: Error (auth/invalid-hash-block-size).':
      'O tamanho do bloco de HASH não é válido.',
    'Firebase: Error (auth/invalid-hash-derived-key-length).':
      'O tamanho da chave derivada do HASH não é válido.',
    'Firebase: Error (auth/invalid-hash-key).':
      'A chave de HASH precisa ter um buffer de byte válido.',
    'Firebase: Error (auth/invalid-hash-memory-cost).':
      'O custo da memória HASH não é válido.',
    'Firebase: Error (auth/invalid-hash-parallelization).':
      'O carregamento em paralelo do HASH não é válido.',
    'Firebase: Error (auth/invalid-hash-rounds).':
      'O arredondamento de HASH não é válido.',
    'Firebase: Error (auth/invalid-hash-salt-separator).':
      'O campo do separador de SALT do algoritmo de geração de HASH precisa ser um buffer de byte válido.',
    'Firebase: Error (auth/invalid-id-token).':
      'O código do token informado não é válido.',
    'Firebase: Error (auth/invalid-last-sign-in-time).':
      'O último horário de login precisa ser uma data UTC válida.',
    'Firebase: Error (auth/invalid-page-token).':
      'A próxima URL fornecida na solicitação é inválida.',
    'Firebase: Error (auth/invalid-password).':
      'A senha é inválida, precisa ter pelo menos 6 caracteres.',
    'Firebase: Error (auth/invalid-password-hash).':
      'O HASH da senha não é válida.',
    'Firebase: Error (auth/invalid-password-salt).':
      'O SALT da senha não é válido.',
    'Firebase: Error (auth/invalid-photo-url).':
      'A URL da foto de usuário é inválido.',
    'Firebase: Error (auth/invalid-provider-id).':
      'O identificador de provedor não é compatível.',
    'Firebase: Error (auth/invalid-session-cookie-duration).':
      'A duração do COOKIE da sessão precisa ser um número válido em milissegundos, entre 5 minutos e 2 semanas.',
    'Firebase: Error (auth/invalid-uid).':
      'O identificador fornecido deve ter no máximo 128 caracteres.',
    'Firebase: Error (auth/invalid-user-import).':
      'O registro do usuário a ser importado não é válido.',
    'Firebase: Error (auth/invalid-provider-data).':
      'O provedor de dados não é válido.',
    'Firebase: Error (auth/maximum-user-count-exceeded).':
      'O número máximo permitido de usuários a serem importados foi excedido.',
    'Firebase: Error (auth/missing-hash-algorithm).':
      'É necessário fornecer o algoritmo de geração de HASH e seus parâmetros para importar usuários.',
    'Firebase: Error (auth/missing-uid).':
      'Um identificador é necessário para a operação atual.',
    'Firebase: Error (auth/reserved-claims).':
      'Uma ou mais propriedades personalizadas fornecidas usaram palavras reservadas.',
    'Firebase: Error (auth/session-cookie-revoked).':
      'O COOKIE da sessão perdeu a validade.',
    'Firebase: Error (auth/uid-already-exists).':
      'O identificador fornecido já está em uso.',
    'Firebase: Error (auth/email-already-exists).':
      'O e-mail fornecido já está em uso.',
    'Firebase: Error (auth/phone-number-already-exists).':
      'O telefone fornecido já está em uso.',
    'Firebase: Error (auth/project-not-found).':
      'Nenhum projeto foi encontrado.',
    'Firebase: Error (auth/insufficient-permission).':
      'A credencial utilizada não tem permissão para acessar o recurso solicitado.',
    'Firebase: Error (auth/internal-error).':
      'O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação.',
  } as Record<string, string>
  if (errors[errorMessage]) {
    return errors[errorMessage]
  } else {
    return errorMessage
  }
}
