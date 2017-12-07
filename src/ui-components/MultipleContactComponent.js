import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import { Col, Row } from 'react-bootstrap'


const ContactItem = ({ index, nom, prenom, email, telephone, removeItem }) => (
  <div>
    <Row>
      <Col md={3}>
        <p>{nom}</p>
      </Col>
      <Col md={3}>
        <p>{prenom}</p>
      </Col>
      <Col md={3}>
        <p>{email}</p>
      </Col>
      <Col md={2}>
        <p>{telephone}</p>
      </Col>
      <Col md={1}>
        <FloatingActionButton mini={true} secondary={true} onClick={() => removeItem(index)}>
          <ContentRemove />
        </FloatingActionButton>
      </Col>
    </Row>
  </div>
)

export default class MultipleContactComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        nom: null,
        prenom: null,
        email: null,
        telephone: null
      },
      list: this.props.items || [],
      canAdd: true,     // until something comes up as invalid
      errorMessage: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
      }
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  /*
  componentWillReceiveProps(nextProps) {
    if(nextProps.hasOwnProperty('items')) {
      nextProps.items.forEach((i) => {
        const { nom, prenom, email, telephone } = i;
        if (nom && prenom && email && telephone) {
          let list = this.state.list.slice()
          list.push(this.state.value)
          this.setState({
            value: {
              nom: null,
              prenom: null,
              email: null,
              telephone: null
            },
            list,
          })          
        }        
      })
      this.props.updateList(list)
    }
  }
  */

  addItem() {

    if (!this.state.canAdd) return;

    const { nom, prenom, email, telephone } = this.state.value
    if (nom && prenom && email && telephone) {
      let list = this.state.list.slice()
      list.push(this.state.value)
      this.setState({
        value: {
          nom: null,
          prenom: null,
          email: null,
          telephone: null
        },
        list,
      })
      if(this.props.updateList) {
        this.props.updateList(list)
      }
    }
  }

  getItems() {
    return this.state.list;
  }

  removeItem(index) {
    let list = Array.from(this.state.list)
    list.splice(index, 1)
    this.setState({ list })
    if(this.props.updateList) {
      this.props.updateList(list)
    }
  }

  updateValue(name, value) {
    let valid = true;
    if (name == 'nom' || name == 'prenom') {
      valid = this.validateString(name, value.target.value)
    }
    else
    if (name == 'email') {
      //valid = this.validateMail(name, value.target.value)
    }
    else
    if (name == 'telephone') {
      //valid = this.validatePhoneNumber(name, value.target.value)
    }
    this.setState({ value: Object.assign({}, this.state.value, { [name]: value.target.value, canAdd: valid }) })
  }

  handleKeyPressed(e) {
    if (e.charCode == 13) {
      this.addItem().bind(this);
    }
  }

  /**
   * 
   * @param {*} name 
   * @param {*} number 
   */
  validatePhoneNumber(name, number) {
    let { errorMessage } = this.state;
    const valid = /(0|\\+33|0033)[1-9][0-9]{8}/.test(number);
    errorMessage[name] = !valid ? 'Numéro de téléphone invalide' : '';
    this.setState({ errorMessage });
    return valid;
  }

  /** TODO: 
   * @description : Valide une donnée de type string 
   * @event: onblur ou onchange    
   * @argument {name} property name we're checking
   * @argument {string} the string to validate
   * @returns {true||false}
   * 
   * @see: https://github.com/jfairbank/revalidate
   */
  validateString(name, string) {
    let { errorMessage } = this.state;
    let valid = (string && string.trim());
    errorMessage[name] = !valid ? 'Ce champ est obligatoire' : '';
    this.setState({ errorMessage });
    return valid;
  }

  /**
   * 
   * @param {*} name 
   * @param {*} string 
   */
  validateMail(name, string) {
    let { errorMessage } = this.state;
    var mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const valid = mailRegExp.test(string);
    
    errorMessage[name] = !valid ? 'Veuillez saisir une addresse email valide' : '';
    this.setState({ errorMessage });
    return valid;
  }
  /*onBlur={value => this.validateMail('mail', this.state.value.mail)}*/
  render() {
    return (
      <div>
        <Row>
          <Col xsHidden smHidden md={3}>
            <TextField
              placeholder={'nom'}
              onChange={value => this.updateValue('nom', value)}
              style={{ "width": "98%" }}
              onKeyPress={this.handleKeyPressed}
              value={this.state.value.nom || ''}
              errorText={this.state.errorMessage.nom}
            />
          </Col>
          <Col xsHidden smHidden md={3}>
            <TextField placeholder={'prénom'}
              onChange={value => this.updateValue('prenom', value)}
              style={{ "width": "98%" }}
              onKeyPress={this.handleKeyPressed}
              value={this.state.value.prenom || ''}
              errorText={this.state.errorMessage.prenom} />
          </Col>
          <Col xsHidden smHidden md={3}>
            <TextField placeholder={'email'}
              onChange={value => this.updateValue('email', value)}
              style={{ "width": "98%" }}
              onBlur={value => this.validateMail('email', this.state.value.email)}
              value={this.state.value.email || ''}
              onKeyPress={this.handleKeyPressed}
              errorText={this.state.errorMessage.email} />
          </Col>
          <Col xsHidden smHidden md={2}>
            <TextField placeholder={'telephone'}
              onChange={value => this.updateValue('telephone', value)}
              style={{ "width": "98%" }}
              onBlur={value => this.validatePhoneNumber('telephone', this.state.value.telephone)}
              value={this.state.value.telephone || ''}
              onKeyPress={this.handleKeyPressed}
              errorText={this.state.errorMessage.telephone} />
          </Col>
          <Col xs={1}>
            <FloatingActionButton   mini={true} onClick={this.addItem.bind(this)} >
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
        <div className="item-list">
          {this.state.list.map((item, index) => {
              return (
                <ContactItem index={index} { ...item } removeItem={this.removeItem.bind(this)} />
              )
            }, this)}
        </div>
      </div>
    )
  }
}