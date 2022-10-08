const TheirMessage = ({ message, lastMessage }) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                />
            )}

            {message.attachments && message.attachments.length > 0 
                ? (
                    <img 
                        src={message.attachment[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '40px' }}
                    />
                )
                : (
                    <div className="message" style={{ float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '40px', backgroundColor: '#CABCDC' }}>
                        {message.text}
                    </div>
                )}
        </div>
    )
}

export default TheirMessage;